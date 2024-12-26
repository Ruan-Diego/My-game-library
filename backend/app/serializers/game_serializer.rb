class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :valor, :slug, :avg_score

  attribute :slug do |object|
    object.slug = name.parameterize
  end

  attribute :avg_score do |object|
    object.reviews.average(:score)&.round(1) || 0
  end

  has_many :reviews
end
