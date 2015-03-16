class LocationsController < ApplicationController
    respond_to :json, :html

  def index
    @locations = Location.all
    respond_with @locations
  end

  def show
    @location = Location.find(params[:id])
    respond_with @location
  end

  def create
    @location = Location.create(location_params)
    respond_with @location
  end

  def update
    @location = Location.find(params[:id])
    @location.update(location_params)
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    respond_with @location
  end

  def new
  end

  private

  def location_params
    params.require(:location).permit(:name, :street, :city)
  end
end
