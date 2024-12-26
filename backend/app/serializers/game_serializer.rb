class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :valor, :slug, :avg_score

  attribute :avg_score do |object|
    object.reviews.average(:score)&.round(1) || 0
  end

  has_many :reviews
end
