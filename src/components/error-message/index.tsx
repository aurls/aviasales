import React from 'react';
import './error-message.scss';

const ErrorMessage: React.FC = () => {
  return (
    <section className="error-message">
      <h2 className="error-message__title">
        Ой, у&nbsp;нас что-то случилось!
      </h2>
      <p className="error-message__text">
        Мы уже знаем о&nbsp;проблеме и&nbsp;кинули все силы на&nbsp;её&nbsp;устранение.
        Попробуйте поискать через 10&nbsp;минут
      </p>
    </section>
  );
};

export default ErrorMessage;
