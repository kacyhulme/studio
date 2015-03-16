require 'test_helper'

class TeacherMailerTest < ActionMailer::TestCase
  test "potential_new_client" do
    mail = TeacherMailer.potential_new_client
    assert_equal "Potential new client", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
