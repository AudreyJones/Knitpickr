class MaterialsController < ApplicationController
    # Take in new materials data from front-end!
    def index
        @materials = Material.all
        render json: @materials
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

    def project_params
        params.require(:material).permit(:id, :name, :quantity, :color, :brand, :favorited, :project_id)
    end
end
