class Teams {
  constructor(
    id,
    user_id,
    project_id,
    techlabel_id,
    status,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.user_id = user_id;
    this.project_id = project_id;
    this.techlabel_id = techlabel_id;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

module.exports = {
  Teams: Teams
};
