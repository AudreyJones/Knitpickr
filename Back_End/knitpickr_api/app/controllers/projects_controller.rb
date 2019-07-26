class ProjectsController < ApplicationController
    def index
        @projects = Project.all
        # conn = Faraday::Connection.new 'RAVELRY_API'
        # @data = conn.get 
        render json: @projects
    end

    def create
        # byebug
        @project = Project.new(project_params)
        # byebug
        if @project.save
            render json: @project
        else
            render json: {error: 'Did not create new project!'}
        end
    end

    def show
        @project = Project.find_by_id(params[:id])
        render json: @project
    end

    # def update
    # end

    # def destroy
    # end

    private

    def project_params
        params.require(:project).permit(:id, :name, :favorited, :materials, :user_id)
    end
end
