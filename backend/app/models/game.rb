class Game < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        reviews.average(:score).round(1) || 0
    end

    def as_json(options = {})
        super(options.merge(methods: :avg_score))
    end
end
