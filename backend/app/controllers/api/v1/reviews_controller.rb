module Api
  module V1
    class ReviewsController < ApiController
      protect_from_forgery with: :null_session 

      # POST /api/v1/reviews
      def create
        #review = current_user.reviews.new(review_params)
        review = Review.new(review_params)

        if review.save
          render json: serializer(review)
        else
          render json: errors(review), status: 422
        end
      end

      # DELETE /api/v1/reviews/:id
      def destroy
        #review = current_user.reviews.find(params[:id])
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: errors(review), status: 422
        end
      end

      private

      # Strong params
      def review_params
        params.require(:review).permit(:title, :description, :score, :game_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        ReviewSerializer
          .new(records, options)
          .serialized_json
      end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end