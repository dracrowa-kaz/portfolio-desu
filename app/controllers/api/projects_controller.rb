module Api
  class ProjectsController < ApplicationController
    def index
      @projects = Project.all
      render 'index'
    end

    def create
      @project = Project.new(project_params)
      return if @project.save
      render json: { status: 'failure' }, status: 204
    end

    def update
      @project = Project.find_by(id: params[:id])

      unless @project
        return render :error, status: 404
      end
      return if @project.update(project_params)
      render json: { status: 'failure' }, status: 204
    end

    def delete
      @project = Project.find_by(id: params[:id])
      unless @project
        return render :error, status: 404
      end
      return if @project.destroy!
      render json: { status: 'failure' }, status: 204
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