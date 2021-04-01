require 'test_helper'

class KmdashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get kmdashboard_index_url
    assert_response :success
  end

end
