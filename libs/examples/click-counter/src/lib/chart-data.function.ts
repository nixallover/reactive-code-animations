import { combineLatest, merge, Observable } from 'rxjs';
import { map, scan, startWith, tap } from 'rxjs/operators';

export interface CreateChartDataParams {
  oneSecondWindow: Observable<number>;
  fiveSecondWindow: Observable<number>;
  fifteenSecondWindow: Observable<number>;
}

export interface SeriesDataPoint {
  clicksPerWindow: number;
  timeElapsed: number;
}

export interface ChartData {
  oneSecond: SeriesDataPoint[];
  fiveSeconds: SeriesDataPoint[];
  fifteenSeconds: SeriesDataPoint[];
}

export function createChartData({
  oneSecondWindow,
  fiveSecondWindow,
  fifteenSecondWindow,
}: CreateChartDataParams): Observable<ChartData> {
  let startTime: Date;
  const initialData: ChartData = {
    oneSecond: [{ clicksPerWindow: 0, timeElapsed: 0 }],
    fiveSeconds: [{ clicksPerWindow: 0, timeElapsed: 0 }],
    fifteenSeconds: [{ clicksPerWindow: 0, timeElapsed: 0 }],
  };
  return combineLatest([
    oneSecondWindow,
    fiveSecondWindow,
    fifteenSecondWindow,
  ]).pipe(
    tap(() => {
      if (!startTime) {
        startTime = new Date();
      }
    }),
    map(([one, five, fifteen]) => {
      const date = new Date();
      const timeElapsed = (date as any) - (startTime as any);
      return {
        one: { clicksPerWindow: one, timeElapsed },
        five: { clicksPerWindow: five, timeElapsed },
        fifteen: { clicksPerWindow: fifteen, timeElapsed },
      };
    }),
    scan(
      (acc, curr) => ({
        oneSecond: acc.oneSecond.concat([curr.one]),
        fiveSeconds: acc.fiveSeconds.concat([curr.five]),
        fifteenSeconds: acc.fifteenSeconds.concat([curr.fifteen]),
      }),
      initialData
    ),
    startWith(initialData)
  );
}

export function convertToFormattedData(
  chartData: SeriesDataPoint
): { x: number; y: number } {
  return {
    x: chartData.timeElapsed / 1000,
    y: chartData.clicksPerWindow,
  };
}
