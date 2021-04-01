require 'test_helper'

class UserdashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get userdashboard_index_url
    assert_response :success
  end

  test "should get profile" do
    get userdashboard_profile_url
    assert_response :success
  end

end
