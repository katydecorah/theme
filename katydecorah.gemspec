# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "katydecorah"
  spec.version       = "0.1.0"
  spec.authors       = ["Katy DeCorah"]

  spec.summary       = "katydecorah.com jekyll theme"
  spec.homepage      = "https://katydecorah.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes)!i) }
end
