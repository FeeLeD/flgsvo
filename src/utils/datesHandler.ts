export const datesHandler = {
  translateMonthToRussian: (month: string) => {
    const monthsTranslations = {
      january: "Январь",
      february: "Февраль",
      march: "Март",
      april: "Апрель",
      may: "Май",
      june: "Июнь",
      july: "Июль",
      august: "Август",
      september: "Сентябрь",
      october: "Октябрь",
      november: "Ноябрь",
      december: "Декабрь",
      month: "Месяц",
    };

    const lowerMonth = month.toLowerCase();

    return monthsTranslations[
      lowerMonth in monthsTranslations ? (lowerMonth as "month") : "month"
    ];
  },
};
