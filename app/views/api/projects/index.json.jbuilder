json.status 'success'
json.projects @projects do |project|
  json.id project.id
  json.title project.title
  json.content project.content
  json.url project.url
  json.cover_url project.cover_url
  json.updated_at project.updated_at
end
