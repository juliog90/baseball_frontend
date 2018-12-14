import unittest 
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class BaseballLogin(unittest.TestCase):

    def setUp(self):
        options = webdriver.ChromeOptions()
        options.add_argument('headless')
        self.driver = webdriver.Chrome(options=options)

    def test_login_baseball(self):
        driver = self.driver
        driver.get("http://localhost:8080/baseball-frontend/")
        self.assertIn("Login", driver.title)
        user = driver.find_element_by_id("username")
        user.send_keys("manuelObrador")
        passw = driver.find_element_by_id("contra")
        passw.send_keys("12345")
        passw.send_keys(Keys.RETURN)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()



