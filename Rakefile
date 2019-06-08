require 'html-proofer'

task :test do
  sh "JEKYLL_ENV=production jekyll build --strict_front_matter"
  options = {
    allow_hash_href: true,
    assume_extension: true,
    http_status_ignore: [500, 999]
  }
  HTMLProofer.check_directory("./_site", options).run
end
