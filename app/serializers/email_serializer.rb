class EmailSerializer < ActiveModel::Serializer
  attributes :id, :receiver, :sender, :body
end
