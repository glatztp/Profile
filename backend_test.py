import requests
import unittest
import sys

class PortfolioWebsiteTest(unittest.TestCase):
    """Test suite for Gabriel Glatz's portfolio website"""
    
    def setUp(self):
        """Set up test environment"""
        self.base_url = "http://localhost:5173"
    
    def test_website_loads(self):
        """Test if the website loads successfully"""
        response = requests.get(self.base_url)
        self.assertEqual(response.status_code, 200, "Website should load successfully")
        self.assertIn("text/html", response.headers.get("Content-Type", ""), 
                     "Response should be HTML")
    
    def test_website_title(self):
        """Test if the website has the correct title"""
        response = requests.get(self.base_url)
        # Simple check for title in HTML content
        self.assertIn("<title", response.text, "Website should have a title tag")

def main():
    """Run the test suite"""
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
    return 0

if __name__ == "__main__":
    sys.exit(main())