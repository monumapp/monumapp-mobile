export const formatOpenHoursDays = (days: string[]) => {
  const week = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"
  ];

  const firtsDay = days[0];

  if (JSON.stringify(days) === JSON.stringify(week)) {
    return 'Aberto todos os dias da semana.'
  }

  if (days.length > 2) {
    const lastDay = days[days.length - 1];
    return `De ${firtsDay} à ${lastDay}`;
  }

  if (firtsDay !== 'Sábado' && firtsDay !== 'Domingo') {
    return `As ${firtsDay}s`;
  }

  return `Aos ${firtsDay}s`;
}

export const formatOpenHoursTime = (open: string, close: string) => {
  if (open === close) {
    return '24h por dia'
  } else {
    return `Aberto das ${open} até ${close}`
  }
}
