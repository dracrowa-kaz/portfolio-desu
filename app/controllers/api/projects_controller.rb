module Api
  class ProjectsController < ApplicationController
    def index
      @projects = Project.all
      render 'index'
    end

    def create
      @project = Project.new(project_params)
      return if @project.save
    end

    def update
      @project = Project.find_by(id: params[:id])

      unless @project
        return render :error, status: :not_found
      end

      return if @project.update(project_params)
    end

    def delete
    end

    def project_params
      params.require(:project)
            .permit(:title,
                    :cover_url,
                    :url,
                    :content,
                    :title)
    end
  end
end