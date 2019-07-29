class ProjectsController < ApplicationController

    def index
        @projects = Project.all
        # conn = Faraday::Connection.new 'RAVELRY_API'
        # @data = conn.get 
        render json: @projects
    end

    def create
        @project = Project.new(project_params)
        @project.material_ids = params[:project][:material_ids].map{|id| id.to_i}
        # byebug
        if @project.save
            # byebug
            render json: @project
        else
            render json: {error: 'Did not create new project!'}
        end
    end

    def show
        @project = Project.find_by_id(params[:id])
        render json: @project
    end

    private

    def project_params
        params.require(:project).permit(:name, :user_id, :active)
    end
end
