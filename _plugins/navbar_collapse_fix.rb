# frozen_string_literal: true

# al_folio_bootstrap_compat sets `.collapse { visibility: hidden }`.
# The theme shows the desktop navbar with `display: flex` and without `.show`,
# so that rule hides the menu. Restore visibility at the Bootstrap expand breakpoint.
Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output&.include?("</head>")
  next if doc.output.include?("navbar-collapse-fix")

  doc.output.sub!(
    "</head>",
    <<~HTML
      <style id="navbar-collapse-fix">
        @media (min-width: 576px) {
          .navbar-expand-sm .navbar-collapse {
            visibility: visible;
          }
        }
      </style>
      </head>
    HTML
  )
end
