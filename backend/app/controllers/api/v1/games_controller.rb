module Api
  module V1
    class GamesController < ApiController
      
      # GET /api/v1/games
      def index
        render json: serializer(games)
      end
      
      # GET /api/v1/games/:id
      def show
        render json: serializer(game)
      end

      # POST /api/v1/games
      def create
        game = Game.new(game_params)

        if game.save
          render json: serializer(game)
        else
          render json: errors(game), status: 422
        end
      end

      # PATCH /api/v1/games/:id
      def update
        game = Game.find_by(id: params[:id])

        if game.update(game_params)
          render json: serializer(game)
        else
          render json: errors(game), status: 422
        end
      end

      # DELETE /api/v1/games/:id
      def destroy
        game = Game.find_by(id: params[:id])

        if game.destroy
          head :no_content
        else
          render json: errors(game), status: 422
        end
      end

      private

      # Get all games
      def games
        @games ||= Game.includes(:reviews).all
      end

      # Get a specific game
      def game
        @game ||= Game.includes(:reviews).find_by(id: params[:id])
      end

      # Strong params
      def game_params
        params.require(:game).permit(:name, :image_url, :valor)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        GameSerializer
          .new(records, options)
          .serialized_json
      end

      # Errors
      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end