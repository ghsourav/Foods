require 'test_helper'

class KmusersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get kmusers_new_url
    assert_response :success
  end

  test "should get create" do
    get kmusers_create_url
    assert_response :success
  end

end
