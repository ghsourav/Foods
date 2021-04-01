require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_index_url
    assert_response :success
  end

  test "should get veg" do
    get home_veg_url
    assert_response :success
  end

  test "should get nonveg" do
    get home_nonveg_url
    assert_response :success
  end

end
