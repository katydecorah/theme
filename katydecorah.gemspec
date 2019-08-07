# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "katydecorah"
  spec.version       = "0.1.0"
  spec.authors       = ["Katy DeCorah"]
  spec.email         = ["katydecorah@gmail.com"]

  spec.summary       = "katydecorah.com jekyll theme"
  spec.homepage      = "https://katy.dev"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
