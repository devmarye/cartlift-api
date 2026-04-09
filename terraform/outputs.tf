output "instance_public_ip" {
  value = aws_instance.cartlift_server.public_ip
}

output "instance_id" {
  value = aws_instance.cartlift_server.id
}

output "rds_endpoint" {
  value = aws_db_instance.cartlift_db.endpoint
}

output "rds_db_name" {
  value = aws_db_instance.cartlift_db.db_name
}

output "rds_username" {
  value = aws_db_instance.cartlift_db.username
}