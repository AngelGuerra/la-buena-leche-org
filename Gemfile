source "https://rubygems.org"

# Happy Jekylling!
gem "jekyll", "~> 3.8.5"

# see: https://github.com/nielsenramon/chalk/issues/195#issuecomment-549992637
gem "sprockets", "~> 3.7"

# https://github.com/envygeeks/jekyll-assets#imagemagick
gem "mini_magick"

# Optimize images using multiple utilities https://github.com/toy/image_optim
gem "image_optim"

# Precompiled binaries for image_optim https://github.com/toy/image_optim_pack
gem "image_optim_pack"

# Test your rendered HTML files to make sure they're accurate. https://github.com/gjtorikian/html-proofer
gem "html-proofer"

# A make-like build utility for Ruby
gem "rake"

# JavaScript parser, minifier, compressor and beautifier toolkit.
gem "uglifier"

# If you have any plugins, put them here!
group :jekyll_plugins do
  # Asset pipelines for Jekyll
  gem "jekyll-assets"

  # Jekyll plugin to silently generate a sitemaps.org compliant sitemap for your Jekyll site
  gem "jekyll-sitemap"

  # CSS Auto-Prefixing, as suggested by jekyll-assets
  gem "autoprefixer-rails"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

