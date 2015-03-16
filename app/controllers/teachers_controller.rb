class TeachersController < ApplicationController
  respond_to :json, :html

  def index
    @teachers = Teacher.all
    respond_with @teachers
  end

  def show
    @teacher = Teacher.find(params[:id])
    respond_with @teacher
  end

  def create
    @teacher = Teacher.create(teacher_params)
    respond_with @teacher
  end

  def update
    @teacher = Teacher.find(params[:id])
    @teacher.update(teacher_params)
  end

  def destroy
    @teacher = Teacher.find(params[:id])
    @teacher.destroy
    respond_with @teacher
  end

  def new
  end

  private

  def teacher_params
    params.require(:teacher).permit(:name, :email, :bio)
  end
end
