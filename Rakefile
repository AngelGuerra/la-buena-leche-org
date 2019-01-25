require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = {
    :allow_hash_href => true,
    :assume_extension => true
  }
  HTMLProofer.check_directory("./_site", options).run
end
