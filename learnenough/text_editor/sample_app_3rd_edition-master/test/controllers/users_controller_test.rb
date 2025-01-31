require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  
  def setup
    @person       = users(:michael)
    @other_user = users(:archer)
  end
  
  test "should redirect index when not logged in" do
    get :index
    assert_redirected_to login_url
  end

  test "should get new" do
    get :new
    assert_response :success
  end
  
  test "should redirect edit when not logged in" do
    get :edit, id: @person
    assert_not flash.empty?
    assert_redirected_to login_url
  end
  
  test "should redirect update when not logged in" do
    patch :update, id: @person, user: { name: @person.name, email: @person.email }
    assert_not flash.empty?
    assert_redirected_to login_url
  end
  
  test "should redirect edit when logged in as wrong user" do
    log_in_as(@other_user)
    get :edit, id: @person
    assert flash.empty?
    assert_redirected_to root_url
  end
  
  test "should redirect update when logged in as wrong user" do
    log_in_as(@other_user)
    patch :update, id: @person, user: { name: @person.name, email: @person.email }
    assert flash.empty?
    assert_redirected_to root_url
  end
  
  test "should redirect destroy when not logged in" do
    assert_no_difference 'User.count' do
      delete :destroy, id: @person
    end
    assert_redirected_to login_url
  end
  
  test "should redirect destroy when logged in as a non-admin" do
    log_in_as(@other_user)
    assert_no_difference 'User.count' do
      delete :destroy, id: @person
    end
    assert_redirected_to root_url
  end
  
  test "should redirect following when not logged in" do
    get :following, id: @person
    assert_redirected_to login_url
  end
  
  test "should redirect followers when not logged in" do
    get :followers, id: @person
    assert_redirected_to login_url
  end  
end
