"use client";
import React, {
  useState,
  useCallback,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiChevronRight, FiFolder } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDocker,
  SiGit,
  SiFigma,
  SiFramer,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiC,
} from "react-icons/si";

// Small helper to join class names (fallback) - keep local to avoid missing imports
const cn = (...args: Array<string | false | null | undefined>) =>
  args.filter(Boolean).join(" ");

const animationVariants: Variants = {
  rootInitial: { opacity: 0, y: 20 },
  rootAnimate: { opacity: 1, y: 0 },
  itemInitial: { opacity: 0, x: -10 },
  itemAnimate: { opacity: 1, x: 0 },
  contentHidden: { opacity: 0, height: 0 },
  contentVisible: { opacity: 1, height: "auto" },
  chevronClosed: { rotate: 0 },
  chevronOpen: { rotate: 90 },
};

const transitions = {
  root: { duration: 0.4 },
  item: { duration: 0.2 },
  content: { duration: 0.3 },
  chevron: { duration: 0.2 },
};

interface ExpansionContextType {
  expandedIds: Set<string>;
  toggleExpanded: (id: string) => void;
}

interface SelectionContextType {
  selectedId: string | null;
  setSelected: (id: string) => void;
  onSelect?: (id: string, label: string) => void;
}

interface TreeContextType {
  focusedId: string | null;
  setFocusedId: (id: string | null) => void;
  treeId: string;
  setKeyboardMode: (mode: boolean) => void;
  keyboardMode: boolean;
}

interface LevelContextType {
  level: number;
}

const ExpansionContext = createContext<ExpansionContextType | null>(null);
const SelectionContext = createContext<SelectionContextType | null>(null);
const TreeContext = createContext<TreeContextType | null>(null);
const LevelContext = createContext<LevelContextType>({ level: 0 });

const useExpansion = () => {
  const context = useContext(ExpansionContext);
  if (!context) {
    throw new Error(
      "FolderTree components must be used within FolderTree.Root"
    );
  }
  return context;
};

const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error(
      "FolderTree components must be used within FolderTree.Root"
    );
  }
  return context;
};

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error(
      "FolderTree components must be used within FolderTree.Root"
    );
  }
  return context;
};

const useLevel = () => {
  return useContext(LevelContext);
};

const getPaddingClass = (level: number): string => {
  const paddingMap: Record<number, string> = {
    0: "pl-3",
    1: "pl-8",
    2: "pl-12",
    3: "pl-16",
    4: "pl-20",
    5: "pl-24",
    6: "pl-28",
    7: "pl-32",
  };
  return paddingMap[level] || `pl-[${Math.min(level * 4 + 12, 48)}px]`;
};

interface CustomBadge {
  content: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface RootProps {
  defaultExpanded?: string[];
  defaultSelected?: string;
  onSelect?: (id: string, label: string) => void;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

interface ItemProps {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  modified?: boolean | CustomBadge;
  untracked?: boolean | CustomBadge;
  className?: string;
  children?: React.ReactNode;
}

interface TriggerProps {
  className?: string;
}

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Root: React.FC<RootProps> = ({
  defaultExpanded = [],
  defaultSelected,
  onSelect,
  className = "",
  children,
  id = "folder-tree",
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(defaultExpanded)
  );
  const [selectedId, setSelectedId] = useState<string | null>(
    defaultSelected || null
  );
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [keyboardMode, setKeyboardMode] = useState(false);
  const treeRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const setSelected = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const getVisibleItemIds = useCallback(() => {
    const items = Array.from(
      treeRef.current?.querySelectorAll('[role="treeitem"]') || []
    );
    return items
      .filter((item) => {
        const element = item as HTMLElement;
        return element.offsetHeight > 0 && element.offsetWidth > 0;
      })
      .map((item) => item.getAttribute("data-id"))
      .filter(Boolean) as string[];
  }, []);

  const [treeHasFocus, setTreeHasFocus] = useState(false);

  const handleTreeFocus = useCallback(() => {
    if (!treeHasFocus) {
      setTreeHasFocus(true);
      setKeyboardMode(true);
    }
  }, [treeHasFocus]);

  const handleTreeBlur = useCallback((e: React.FocusEvent) => {
    if (!treeRef.current?.contains(e.relatedTarget as Node)) {
      setTreeHasFocus(false);
      setFocusedId(null);
      setKeyboardMode(false);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const getVisibleItems = () => {
        return Array.from(
          treeRef.current?.querySelectorAll('[role="treeitem"]') || []
        ).filter((item) => {
          const element = item as HTMLElement;
          return element.offsetHeight > 0 && element.offsetWidth > 0;
        });
      };

      if (e.key === "Tab") {
        if (treeHasFocus && !focusedId) {
          const visibleItemIds = getVisibleItemIds();
          if (visibleItemIds.length > 0) {
            setFocusedId(visibleItemIds[0]);
            e.preventDefault();
            return;
          }
        }

        if (focusedId) {
          const visibleItems = getVisibleItems();
          const currentIndex = visibleItems.findIndex(
            (item) => item.getAttribute("data-id") === focusedId
          );

          if (e.shiftKey) {
            if (currentIndex === 0) {
              setFocusedId(null);
              setTreeHasFocus(false);
              setKeyboardMode(false);
              return;
            }
            const nextIndex = Math.max(0, currentIndex - 1);
            const nextItem = visibleItems[nextIndex] as HTMLElement;
            const nextId = nextItem?.getAttribute("data-id");
            if (nextId) {
              setFocusedId(nextId);
              e.preventDefault();
            }
          } else {
            if (currentIndex === visibleItems.length - 1) {
              setFocusedId(null);
              setTreeHasFocus(false);
              setKeyboardMode(false);
              return;
            }
            const nextIndex = Math.min(
              visibleItems.length - 1,
              currentIndex + 1
            );
            const nextItem = visibleItems[nextIndex] as HTMLElement;
            const nextId = nextItem?.getAttribute("data-id");
            if (nextId) {
              setFocusedId(nextId);
              e.preventDefault();
            }
          }
        }
        return;
      }

      if (!keyboardMode || !focusedId) return;

      const visibleItems = getVisibleItems();
      const currentIndex = visibleItems.findIndex(
        (item) => item.getAttribute("data-id") === focusedId
      );

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (currentIndex < visibleItems.length - 1) {
            const nextItem = visibleItems[currentIndex + 1] as HTMLElement;
            const nextId = nextItem.getAttribute("data-id");
            if (nextId) setFocusedId(nextId);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (currentIndex > 0) {
            const prevItem = visibleItems[currentIndex - 1] as HTMLElement;
            const prevId = prevItem.getAttribute("data-id");
            if (prevId) setFocusedId(prevId);
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          if (!expandedIds.has(focusedId)) {
            toggleExpanded(focusedId);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (expandedIds.has(focusedId)) {
            toggleExpanded(focusedId);
          }
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          setSelected(focusedId);
          if (onSelect) {
            const currentItem = visibleItems[currentIndex] as HTMLElement;
            const label =
              currentItem.querySelector("span:nth-of-type(2)")?.textContent ||
              "";
            onSelect(focusedId, label);
          }
          break;
      }
    },
    [
      focusedId,
      keyboardMode,
      expandedIds,
      toggleExpanded,
      setSelected,
      onSelect,
      getVisibleItemIds,
      treeHasFocus,
    ]
  );

  useEffect(() => {
    const handleMouseDown = () => setKeyboardMode(false);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const expansionValue: ExpansionContextType = {
    expandedIds,
    toggleExpanded,
  };

  const selectionValue: SelectionContextType = {
    selectedId,
    setSelected,
    onSelect,
  };

  const treeValue: TreeContextType = {
    focusedId,
    setFocusedId,
    treeId: id,
    setKeyboardMode,
    keyboardMode,
  };

  return (
    <ExpansionContext.Provider value={expansionValue}>
      <SelectionContext.Provider value={selectionValue}>
        <TreeContext.Provider value={treeValue}>
          <LevelContext.Provider value={{ level: 0 }}>
            <motion.div
              ref={treeRef}
              variants={animationVariants}
              initial="rootInitial"
              animate="rootAnimate"
              transition={transitions.root}
              className={cn(
                "border border-[rgba(198,172,143,0.06)] dark:border-[rgba(94,80,63,1)] rounded-lg overflow-hidden",
                className
              )}
              style={{
                background:
                  "linear-gradient(180deg, rgba(198,172,143,0.18) 0%, rgba(94,80,63,0.12) 100%)",
              }}
              role="tree"
              aria-labelledby={`${id}-label`}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onFocus={handleTreeFocus}
              onBlur={handleTreeBlur}
            >
              <div className="w-full overflow-y-auto bg-background text-sm">
                {children}
              </div>
            </motion.div>
          </LevelContext.Provider>
        </TreeContext.Provider>
      </SelectionContext.Provider>
    </ExpansionContext.Provider>
  );
};

const ItemContext = createContext<{
  itemId: string;
  hasChildren: boolean;
  isExpanded: boolean;
  toggleExpanded: () => void;
} | null>(null);

const Item: React.FC<ItemProps> = ({
  id,
  label,
  icon,
  badge,
  modified,
  untracked,
  className = "",
  children,
}) => {
  const expansionContext = useExpansion();
  const selectionContext = useSelection();
  const treeContext = useTree();
  const { level } = useLevel();
  const itemRef = useRef<HTMLDivElement>(null);
  const keyboardMode = treeContext.keyboardMode;

  const hasChildren = React.Children.count(children) > 0;
  const isExpanded = expansionContext.expandedIds.has(id);
  const isSelected = selectionContext.selectedId === id;
  const isFocused = treeContext.focusedId === id;

  const handleItemClick = useCallback(() => {
    treeContext.setKeyboardMode(false);
    selectionContext.setSelected(id);
    treeContext.setFocusedId(id);
    if (selectionContext.onSelect) {
      selectionContext.onSelect(id, label);
    }
  }, [id, label, selectionContext, treeContext]);

  const toggleExpanded = useCallback(() => {
    if (hasChildren) {
      expansionContext.toggleExpanded(id);
    }
  }, [id, hasChildren, expansionContext]);

  const handleFocus = useCallback(() => {
    treeContext.setFocusedId(id);
  }, [id, treeContext]);

  useEffect(() => {
    if (isFocused && itemRef.current) {
      itemRef.current.focus();
    }
  }, [isFocused]);

  const itemContextValue = {
    itemId: id,
    hasChildren,
    isExpanded,
    toggleExpanded,
  };

  const renderBadge = (
    badgeData: boolean | CustomBadge | undefined,
    defaultContent: string,
    defaultClassName: string
  ) => {
    if (!badgeData) return null;

    if (typeof badgeData === "boolean") {
      return (
        <span
          className={defaultClassName}
          aria-label={`${defaultContent} status`}
        >
          {defaultContent}
        </span>
      );
    }

    return (
      <span
        className={cn(
          "ml-auto text-xs px-2 py-0.5 rounded-full",
          badgeData.className
        )}
        aria-label={badgeData.ariaLabel || `Custom badge: ${badgeData.content}`}
      >
        {badgeData.content}
      </span>
    );
  };

  return (
    <ItemContext.Provider value={itemContextValue}>
      <LevelContext.Provider value={{ level: level + 1 }}>
        <div>
          <motion.div
            ref={itemRef}
            variants={animationVariants}
            initial="itemInitial"
            animate="itemAnimate"
            transition={{ ...transitions.item, delay: level * 0.05 }}
            data-selected={isSelected ? "true" : "false"}
            data-id={id}
            className={cn(
              "flex items-center gap-3 py-3 text-base transition-colors cursor-pointer select-none ",
              getPaddingClass(level),
              className,
              isSelected
                ? "bg-[#c6ac8f22] text-[#c6ac8f] dark:bg-[#5e503f44] dark:text-[#eae0d5] border-r-2 border-[#c6ac8f]"
                : "",
              !isSelected && "hover:bg-[#c6ac8f10] dark:hover:bg-[#5e503f22]",
              keyboardMode && isFocused
                ? "focus:outline-none focus:ring-2 focus:ring-[#c6ac8f] focus:ring-inset"
                : "focus:outline-none"
            )}
            onClick={(e: React.MouseEvent) => {
              handleItemClick();
              e.stopPropagation();
              toggleExpanded();
            }}
            onFocus={handleFocus}
            role="treeitem"
            tabIndex={isFocused ? 0 : -1}
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-selected={isSelected}
            aria-label={`${hasChildren ? "Folder" : "File"}: ${label}`}
            aria-level={level + 1}
          >
            {hasChildren && (
              <motion.span
                className="flex-shrink-0 cursor-pointer"
                variants={animationVariants}
                animate={isExpanded ? "chevronOpen" : "chevronClosed"}
                transition={transitions.chevron}
                aria-hidden="true"
              >
                <FiChevronRight
                  size={18}
                  className="text-[#c6ac8f] dark:text-[#eae0d5]"
                />
              </motion.span>
            )}
            {!hasChildren && <span className="w-3 mr-2" aria-hidden="true" />}
            {icon && (
              <span
                className="mr-1 flex-shrink-0"
                style={{ fontSize: 20, color: "#c6ac8f" }}
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <span className="flex-1">{label}</span>
            {badge && (
              <span
                className="ml-auto text-xs bg-[#c6ac8f10] dark:bg-[#5e503f22] text-[#eae0d5cc] dark:text-[#eae0d5] px-2 py-0.5 rounded-full"
                aria-label={`Badge: ${badge}`}
              >
                {badge}
              </span>
            )}
            {renderBadge(
              modified,
              "M",
              "ml-auto text-xs bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full"
            )}
            {renderBadge(
              untracked,
              "U",
              "ml-auto text-xs bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full"
            )}
          </motion.div>
          {children}
        </div>
      </LevelContext.Provider>
    </ItemContext.Provider>
  );
};

const Trigger: React.FC<TriggerProps> = ({ className = "" }) => {
  const itemContext = useContext(ItemContext);
  if (!itemContext || !itemContext.hasChildren) {
    return null;
  }

  return (
    <motion.span
      className={cn("mr-2 flex-shrink-0 cursor-pointer", className)}
      variants={animationVariants}
      animate={itemContext.isExpanded ? "chevronOpen" : "chevronClosed"}
      transition={transitions.chevron}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        itemContext.toggleExpanded();
      }}
      role="button"
      aria-label={itemContext.isExpanded ? "Collapse" : "Expand"}
      tabIndex={-1}
    >
      <FiChevronRight
        size={18}
        className="text-[#c6ac8f] dark:text-[#eae0d5]"
      />
    </motion.span>
  );
};

const Content: React.FC<ContentProps> = ({ children, className = "" }) => {
  const itemContext = useContext(ItemContext);
  if (!itemContext) {
    return <>{children}</>;
  }

  const hasContent = React.Children.count(children) > 0;

  return (
    <AnimatePresence>
      {hasContent && itemContext.isExpanded && (
        <motion.div
          variants={animationVariants}
          initial="contentHidden"
          animate="contentVisible"
          exit="contentHidden"
          transition={transitions.content}
          style={{ overflow: "hidden" }}
          className={className}
          role="group"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FolderTree = {
  Root,
  Item,
  Trigger,
  Content,
};

// --- Skills data (reused/adapted) ---
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <SiReact size={16} />,
    skills: [
      { id: "react", name: "React", icon: <SiReact />, level: 55 },
      { id: "ts", name: "TypeScript", icon: <SiTypescript />, level: 40 },
      { id: "next", name: "Next.js", icon: <SiNextdotjs />, level: 30 },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 55,
      },
      { id: "framer", name: "Framer Motion", icon: <SiFramer />, level: 20 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <SiNodedotjs size={16} />,
    skills: [
      { id: "node", name: "Node.js", icon: <SiNodedotjs />, level: 44 },
      { id: "python", name: "Python", icon: <SiPython />, level: 70 },
      { id: "go", name: "Go", icon: <SiGo />, level: 30 },
      { id: "postgres", name: "PostgreSQL", icon: <SiPostgresql />, level: 60 },
      { id: "mongo", name: "MongoDB", icon: <SiMongodb />, level: 45 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    icon: <SiGit size={16} />,
    skills: [
      { id: "git", name: "Git", icon: <SiGit />, level: 60 },
      { id: "docker", name: "Docker", icon: <SiDocker />, level: 25 },
      { id: "figma", name: "Figma", icon: <SiFigma />, level: 45 },
      { id: "js", name: "JavaScript", icon: <SiJavascript />, level: 65 },
    ],
  },
];

export default function Skills() {
  const [expanded, setExpanded] = useState<string[]>([skillCategories[0].id]);

  return (
    <section id="skills" className="py-8 px-4">
      <div className="h-96 flex items-center justify-center">
        <div className="w-full max-w-5xl px-8">
          <h2 className="sr-only">Skills</h2>

          <div className="mx-auto w-full">
            <FolderTree.Root
              defaultExpanded={expanded}
              className="mx-auto border-transparent shadow-none p-0"
            >
              {skillCategories.map((cat) => (
                <FolderTree.Item
                  key={cat.id}
                  id={cat.id}
                  label={cat.title}
                  icon={<FiFolder size={28} style={{ color: "#c6ac8f" }} />}
                >
                  <FolderTree.Content>
                    <div className="flex flex-col">
                      {cat.skills.map((s) => (
                        <FolderTree.Item
                          key={s.id}
                          id={`${cat.id}/${s.id}`}
                          label={s.name}
                          icon={s.icon}
                        />
                      ))}
                    </div>
                  </FolderTree.Content>
                </FolderTree.Item>
              ))}
            </FolderTree.Root>
          </div>
        </div>
      </div>
    </section>
  );
}
