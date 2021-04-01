require 'test_helper'

class KmsessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get kmsessions_new_url
    assert_response :success
  end

  test "should get create" do
    get kmsessions_create_url
    assert_response :success
  end

  test "should get destroy" do
    get kmsessions_destroy_url
    assert_response :success
  end

end
