terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "nicholausamarsden.com"
    key    = "terraform/terraform.tfstate"
    region = "us-east-2"
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-2"
}

variable "s3_bucket_name" {
  description = "Name of the existing S3 bucket"
  type        = string
  default     = "nicholausamarsden.com"
}

variable "build_dir" {
  description = "Path to the build output directory"
  type        = string
  default     = "../dist"
}

locals {
  content_types = {
    ".html" = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"  = "font/ttf"
    ".eot"  = "application/vnd.ms-fontobject"
    ".map"  = "application/json"
    ".txt"  = "text/plain"
    ".xml"  = "application/xml"
    ".webp" = "image/webp"
    ".pdf"  = "application/pdf"
  }
}

# Upload all build files to the existing S3 bucket
resource "aws_s3_object" "build_files" {

  for_each = fileset(var.build_dir, "**/*")

  bucket       = var.s3_bucket_name
  key          = each.value
  source       = "${var.build_dir}/${each.value}"
  etag         = filemd5("${var.build_dir}/${each.value}")
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), "application/octet-stream")
}

output "bucket_name" {
  value = var.s3_bucket_name
}

output "files_uploaded" {
  value = length(aws_s3_object.build_files)
}
