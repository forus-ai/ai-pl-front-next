type BudgetSolution = {
  /** 어종 */
  fish: Fish;
  /** 예산(단위: 천원) */
  buget: number;
  /** 평수 */
  ownArea: number;
  /** 평수 단위 */
  landUnit: LandUnit;
  /** 정부 대출 여부 */
  isGoverLoan: boolean;
  /** 보유 시공비 기준 결과 */
  byBuget: BudgetResult | null;
  /** 보유 토지 면적 기준 결과 */
  byLand: BudgetResult | null;
};

type BudgetSolutionForm = Pick<
  BudgetSolution,
  'buget' | 'fish' | 'isGoverLoan' | 'landUnit' | 'ownArea'
>;

type Fish =
  | 'SHRIMP' // 새우
  | 'EEL' // 장어
  | 'ETC'; // 기타

type LandUnit =
  | 'P' // 평
  | 'M'; // 제곱미터

type BudgetResult = {
  /** 총 시공비 */
  constructCost: number;
  /** 토지 면적 */
  landArea: number;
  /** 연 생산량 */
  productYear: number;
  /** 연 매출 */
  salesYear: number;
  /** 수 면적 */
  waterArea: number;
  /** 토지 매매비 */
  landCost: number;
};
