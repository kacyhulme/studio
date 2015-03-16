class TeacherMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.teacher_mailer.potential_new_client.subject
  #
  def potential_new_client(email)
    @greeting = "Hi, from  #{email.sender}"
    @body = email.body

    mail to: email.receiver
  end
end
