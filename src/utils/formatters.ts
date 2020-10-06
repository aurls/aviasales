import formatNumber from './formatNumber';
import getWordFormAfterNumber from './getWordFormAfterNumber';

export const formatPrice = (price: number): string => {
  return formatNumber(price);
};

export const getDepartureTime = (time: number): string => {
  return formatTime(time);
};

export const getArrivalTime = (departureTime: number, duration: number): string => {
  let timestamp = new Date(departureTime).getTime();
  timestamp += duration * 1000 * 60;
  return formatTime(timestamp);
};

export const formatTime = (time: number): string => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Moscow'
  };
  return new Date(time).toLocaleTimeString([], options);
};

export const getDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours
    ? `${hours}ч ${minutes}м`
    : `${minutes}м`;
};

export const getTransfersTitle = (numberOfTransfers: number): string => {
  if (numberOfTransfers === 0) return 'Без пересадок';
  const wordForm = getWordFormAfterNumber(
    numberOfTransfers,
    ['пересадка', 'пересадки', 'пересадок']);
  return `${numberOfTransfers} ${wordForm}`;
};
