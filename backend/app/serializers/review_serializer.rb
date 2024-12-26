class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :game_id
end
