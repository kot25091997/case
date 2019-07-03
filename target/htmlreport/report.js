$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/case4.feature");
formatter.feature({
  "name": "search product in the testme app",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user searches a product in testme app",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opensthe testme app",
  "keyword": "Given "
});
formatter.match({
  "location": "Case4.user_opensthe_testme_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entersthe username as \"shwesam\" And password as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Case4.user_entersthe_username_as_And_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click submit buttonlogin",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.click_submit_buttonlogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches the product ashead and select headphone",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.user_searches_the_product_ashead_and_select_headphone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Find button",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.click_Find_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check for size of cart",
  "keyword": "And "
});
formatter.match({
  "location": "Case4.user_check_for_size_of_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify add to cart success",
  "keyword": "Then "
});
formatter.match({
  "location": "Case4.verify_add_to_cart_success()"
});
formatter.result({
  "status": "passed"
});
});