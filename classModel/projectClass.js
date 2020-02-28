class Projects {
  constructor(
    id,
    title,
    desc,
    url,
    dev_url,
    repo_url,
    delivered_on,
    lead_by,
    product_manager,
    wip,
    created_by,
    status,
    created_at,
    updated_at,
    deleted_at
  ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.url = url;
    this.dev_url = dev_url;
    this.repo_url = repo_url;
    this.delivered_on = delivered_on;
    this.lead_by = lead_by;
    this.product_manager = product_manager;
    this.wip = wip;
    this.created_by = created_by;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}

module.exports = {
  Projects: Projects
};
