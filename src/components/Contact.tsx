import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import colors from "../utils/colors";
import Globe, { cityCoordinates } from "./Globe";
import {
  PaperPlaneTilt,
  MapPin,
  Phone,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Check,
} from "phosphor-react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_qvvnyvi", // ID do seu serviço (fixo)
        "template_jlw5wgf", // ID do seu template
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "gH7FhQnOKbr2NS8HK" // sua public key
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      label: t("contact.info.email"),
      value: "gabrielfellipeglatz@gmail.com",
      href: "mailto:gabrielfellipeglatz@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Santa Catarina, Brazil",
      href: "https://maps.google.com/?q=Santa+Catarina,+Brazil",
    },
  ];

  const socialLinks = [
    {
      icon: GithubLogo,
      label: "GitHub",
      href: "https://github.com/glatztp",
    },
    {
      icon: LinkedinLogo,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gabriel-glatz",
    },
  ];

  // Lista de cidades que o globo deve rotacionar
  const rotateCitiesList = [
    "sao paulo",
    "rio de janeiro",
    "brazil",
    "new york",
    "london",
    "paris",
    "tokyo",
    "sydney",
    "mexico city",
    "singapore",
    "lisbon",
    "cairo",
    "bangkok",
  ];

  const hexToRgbArray = (hex: string): [number, number, number] => {
    const sanitized = hex.replace("#", "").slice(0, 6);
    const r = parseInt(sanitized.substring(0, 2), 16) / 255;
    const g = parseInt(sanitized.substring(2, 4), 16) / 255;
    const b = parseInt(sanitized.substring(4, 6), 16) / 255;
    return [Number(r.toFixed(4)), Number(g.toFixed(4)), Number(b.toFixed(4))];
  };

  const baseColorArray = hexToRgbArray(colors.gunmetal);
  const markerColorArray = hexToRgbArray(colors.cyan);
  const glowColorArray = hexToRgbArray(colors.khaki);

  const rotateMarkers = rotateCitiesList
    .map((city) => {
      const coords = cityCoordinates[city.toLowerCase()];
      if (!coords) return null;
      return { location: coords as [number, number], size: 0.035 };
    })
    .filter(Boolean) as { location: [number, number]; size: number }[];

    const markers: { location: [number, number]; size: number }[] = [
      { location: ([-27.2423, -50.2189] as unknown) as [number, number], size: 0.05 },
      ...rotateMarkers,
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32"
      style={{ backgroundColor: colors.black }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: colors.almond }}
          >
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #c6ac8f, #5e503f)",
              }}
            >
              {t("contact.title")}
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.almond + "cc" }}
          >
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Globe moved into the Contact Info column so it displays alongside contact details */}

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(90deg, ${colors.khaki}22, ${colors.walnut_brown}22)`,
                }}
              />
              <div
                className="relative rounded-2xl p-8 border"
                style={{
                  backgroundColor: colors.gunmetal + "dd",
                  borderColor: colors.walnut_brown + "80",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.almond }}
                >
                  {t("contact.form.title")}
                </h3>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg border"
                    style={{
                      backgroundColor: colors.greenPulse + "22",
                      borderColor: colors.greenPulse + "80",
                    }}
                  >
                    <p
                      className="font-medium flex items-center gap-2"
                      style={{ color: colors.greenPulse }}
                    >
                      <Check size={20} />
                      {t("contact.form.success")}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block font-medium mb-2"
                          style={{ color: colors.almond + "cc" }}
                        >
                          {t(`contact.form.labels.${field}`)} *
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          id={field}
                          name={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all"
                          style={{
                            backgroundColor: colors.gunmetal + "bb",
                            border: `1px solid ${colors.walnut_brown}80`,
                            color: colors.almond,
                          }}
                          placeholder={
                            field === "email"
                              ? t("contact.form.placeholders.email")
                              : t("contact.form.placeholders.name")
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-medium mb-2"
                      style={{ color: colors.almond + "cc" }}
                    >
                      {t("contact.form.labels.subject")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all"
                      style={{
                        backgroundColor: colors.gunmetal + "bb",
                        border: `1px solid ${colors.walnut_brown}80`,
                        color: colors.almond,
                      }}
                      placeholder={t("contact.form.placeholders.subject")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-medium mb-2"
                      style={{ color: colors.almond + "cc" }}
                    >
                      {t("contact.form.labels.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg placeholder-slate-400 focus:outline-none transition-all resize-none"
                      style={{
                        backgroundColor: colors.gunmetal + "bb",
                        border: `1px solid ${colors.walnut_brown}80`,
                        color: colors.almond,
                      }}
                      placeholder={t("contact.form.placeholders.message")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 rounded-lg font-semibold shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "linear-gradient(90deg, " +
                        colors.khaki +
                        ", " +
                        colors.walnut_brown +
                        ")",
                      color: colors.black,
                      boxShadow: `0 4px 14px ${colors.khaki}bb`,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                        {t("contact.form.button.sending")}
                      </>
                    ) : (
                      <div className="flex p-4">
                        <PaperPlaneTilt size={20} />
                        <p>{t("contact.form.button.send")}</p>
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: colors.almond }}
              >
                {t("contact.info.title")}
              </h3>
              <p
                className="leading-relaxed mb-8"
                style={{ color: colors.almond + "cc" }}
              >
                {t("contact.info.description")}
              </p>

              <div className="mb-8 flex justify-center">
                <Globe
                  baseColor={baseColorArray}
                  markerColor={markerColorArray}
                  glowColor={glowColorArray}
                  markers={markers}
                  scale={1}
                  rotateToLocation={"brazil"}
                  autoRotate={true}
                  rotateCities={rotateCitiesList}
                  rotationSpeed={4000}
                  className="w-full max-w-[420px] aspect-square"
                />
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-sm" style={{}} />
            <div
              className="relative rounded-xl p-6 border"
              style={{
                backgroundColor: colors.gunmetal + "bb",
                borderColor: colors.walnut_brown + "80",
                backdropFilter: "blur(6px)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: colors.greenPulse }}
                />
                <h4 style={{ color: colors.almond, fontWeight: 600 }}>
                  {t("contact.availability.title")}
                </h4>
              </div>
              <p style={{ color: colors.almond + "cc", fontSize: "0.875rem" }}>
                {t("contact.availability.description")}
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-between  gap-12 lg:gap-20">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="p-3 rounded-lg border transition-all"
                      style={{
                        backgroundColor: colors.gunmetal + "bb",
                        borderColor: colors.walnut_brown + "80",
                      }}
                    >
                      <IconComponent
                        size={24}
                        style={{ color: colors.khaki }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: colors.almond + "aa" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="font-medium transition-colors"
                        style={{ color: colors.almond }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
            <div>
              <div className="flex gap-6 flex-col">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-lg border transition-all"
                      style={{
                        backgroundColor: colors.gunmetal + "bb",
                        borderColor: colors.walnut_brown + "80",
                        color: colors.khaki,
                      }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            {/* Availability */}
          </div>
        </div>
      </div>
    </section>
  );
}
