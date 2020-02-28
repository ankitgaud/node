class Attendances {
  constructor(
    id,
    user_id,
    date,
    in_time,
    out_time,
    status,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.user_id = user_id;
    this.date = date;
    this.in_time = in_time;
    this.out_time = out_time;
    this.status = status;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

module.exports = {
  Attendances: Attendances
};
