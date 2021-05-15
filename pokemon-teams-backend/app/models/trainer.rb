class Trainer < ApplicationRecord
  has_many :pokemons

  validate do
    pokemon_count_valid?
  end

  
  private

  def pokemon_count_valid?
    if self.trainer.pokemons.count >= 6
      self.errors.add(:team_max, "Can't have more than 6 teams. SNS!")
    end
  end
end
