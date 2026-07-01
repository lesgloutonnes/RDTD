/** Utilitaires deck — cartes stackables et plafonds. */

export function countCardInDeck(pickedIds, cardId) {
  return pickedIds.filter((id) => id === cardId).length;
}

export function getCardMaxStack(card) {
  if (!card?.stackable) return 1;
  if (card.maxStack != null && card.maxStack > 0) return card.maxStack;
  return Infinity;
}

export function isCardAtMaxStack(card, count) {
  if (!card?.stackable) return false;
  const max = getCardMaxStack(card);
  return Number.isFinite(max) && count >= max;
}

export function canAddCardToDeck(card, pickedIds) {
  const count = countCardInDeck(pickedIds, card.id);
  if (card.stackable) return count < getCardMaxStack(card);
  return count === 0;
}
