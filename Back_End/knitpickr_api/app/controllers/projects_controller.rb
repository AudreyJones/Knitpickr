class ProjectsController < ApplicationController
    def index
        @projects = Project.all
        # conn = Faraday::Connection.new 'RAVELRY_API'
        # @data = conn.get 
        render json: @projects
    end

    def show
        @project = Project.find_by_id(params[:id])
        render json: @project

    end

    def create
        @project = Project.create(project_params)
        render json: @project
    end

    def update

    end

    def destroy

    end

    private

    def project_params
        params.require(:project).permit(:id, :name, :favorited, :materials)
    end
end
