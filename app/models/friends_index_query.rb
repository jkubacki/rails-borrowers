class FriendsIndexQuery
  attr_reader :params, :scope

  def initialize(scope, params)
    @scope = scope
    @params = params
  end

  def self.find(scope, params)
    self.new(scope, params).find
  end

  def find
    result = scope

    if params[:sort_by]
      order_query = params[:sort_by]

      if params[:sort_desc]
        order_query =  "#{order_query} DESC"
      else
        order_query =  "#{order_query} ASC"
      end

      result = result.order(order_query)
    end

    result
  end
end
