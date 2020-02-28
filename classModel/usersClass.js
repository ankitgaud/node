class Users {
  constructor(
    id,
    name,
    email,
    email_verified_at,
    password,
    role_id,
    phone,
    mobile,
    emergency_contact_no,
    emergency_contact_name,
    designation,
    dob,
    doj,
    hire_date,
    emp_id,
    resignation_date,
    city,
    address,
    reporting_to,
    bg,
    profile_pic,
    resume_url,
    branch_id,
    current_salary,
    user_type,
    status,
    remember_token,
    created_at,
    update_at,
    deleted_at
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.role_id = role_id;
    this.phone = phone;
    this.mobile = mobile;
    this.emergency_contact_no = emergency_contact_no;
    this.emergency_contact_name = emergency_contact_name;
    this.designation = designation;
    this.dob = dob;
    this.doj = doj;
    this.hire_date = hire_date;
    this.emp_id = emp_id;
    this.resignation_date = resignation_date;
    this.city = city;
    this.address = address;
    this.reporting_to = reporting_to;
    this.bg = bg;
    this.profile_pic = profile_pic;
    this.resume_url = resume_url;
    this.branch_id = branch_id;
    this.current_salary = current_salary;
    this.user_type = user_type;
    this.status = status;
    this.remember_token = remember_token;
    this.created_at = created_at;
    this.update_at = update_at;
    this.deleted_at = deleted_at;
  }
}

module.exports = {
  Users: Users
};
