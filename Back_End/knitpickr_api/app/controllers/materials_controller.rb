class MaterialsController < ApplicationController
    # Take in new materials data from front-end!
    def index
        @materials = Material.all
        @users = User.all
        render json: @materials
    end

    def create
    #     byebug
    #     # Creating a new material with data pulled from front-end's MaterialForm
    #     # Requires an action with a fetch request Post method - actions/materials
    #     @project = Project.find_by_id(params[:project_id])
    #     # @last_material = @project.materials.last
    #     Material.create(project_id: @project.id)
    #     render :json @material
    end

    def show
        @material = Material.find_by_id(params[:id])
        render json: @material
    end

    def update

    end

    def delete

    end

    private

    def materials_params
        params.require(:material).permit(:id, :name, :quantity, :color, :brand, :favorited, :project_id)
    end
end
