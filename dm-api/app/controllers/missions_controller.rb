class MissionsController < ApplicationController

  def index
    @missions = Mission.all
    now = Date.current
    @date = now
    @dead_line = Date.new(2024, 3, 20)
    @remain = (@dead_line - @date).numerator

    data = {
      missions: @missions, date: @date, dead_line: @dead_line, remain: @remain
    }
    
    render json: data
  end

  def show
    mission = Mission.find(params[:id])
    render json: mission
  end

  def create
    Mission.create(mission_params)
    head :created
  end

  private

  def mission_params
    params.require(:mission).permit(:title, :summary)
  end

  

end
