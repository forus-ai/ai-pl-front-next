import deepFreeze from 'utils/deepFreeze';

const COMMON_PATH = '/images';

export const IMAGES = deepFreeze({
  MAIN: {
    SPA: {
      PC: `${COMMON_PATH}/main/spa-pc.png`,
      MOBILE: `${COMMON_PATH}/main/spa-mobile.png`,
    },
    SHAKE_HAND: {
      PC: `${COMMON_PATH}/main/shakehand-pc.png`,
      MOBILE: `${COMMON_PATH}/main/shakehand-mo.png`,
    },
    PLAN: `${COMMON_PATH}/main/plan.png`,
    NET: `${COMMON_PATH}/main/net.png`,
    SQUARE_FIELD: `${COMMON_PATH}/main/square-field.png`,
    SKYBLUE_BG: `${COMMON_PATH}/main/skyblue-bg.png`,
    CONSULT_NOTE: `${COMMON_PATH}/main/consult-note.png`,
    SERVICE_SELECT: `${COMMON_PATH}/main/service-select.png`,
    DASHBOARD: `${COMMON_PATH}/main/dashboard.png`,
  },
  PLAN: {
    PROCESS_FIT_PLAN: `${COMMON_PATH}/plan/process-fit-plan.png`,
    PROCESS_VERIFY_LAND: `${COMMON_PATH}/plan/process-verify-land.png`,
    WIDE_BUILDING: `${COMMON_PATH}/plan/wide-building.png`,
  },
  PREPARE: {
    PREPARE_PC: `${COMMON_PATH}/prepare-pc.png`,
    PREPARE_PLAN_PC: `${COMMON_PATH}/prepare-plan-pc.png`,
  },
  INTRODUCE: {
    DOCUMENT: `${COMMON_PATH}/introduce/document.png`,
    MAP: `${COMMON_PATH}/introduce/map.png`,
    MATH: `${COMMON_PATH}/introduce/math.png`,
    APP_IMAGE_1: `${COMMON_PATH}/introduce/app-image-1.png`,
    APP_IMAGE_2: `${COMMON_PATH}/introduce/app-image-2.png`,
    APP_IMAGE_3: `${COMMON_PATH}/introduce/app-image-3.png`,
    APP_IMAGE_4: `${COMMON_PATH}/introduce/app-image-4.png`,
    CHECK_COLUMN: `${COMMON_PATH}/introduce/check-column.png`,
    LONG_PAPER: `${COMMON_PATH}/introduce/long-paper.png`,
    MODEL_SKETCH: `${COMMON_PATH}/introduce/model-sketch.png`,
    RANGE_GRAPH: `${COMMON_PATH}/introduce/range-graph.png`,
    SHAKE_HAND: `${COMMON_PATH}/introduce/shake-hand.png`,
    EXCAVATOR: `${COMMON_PATH}/introduce/excavator.png`,
  },
  DASHBOARD: {
    QUARTER_DONUT: `${COMMON_PATH}/dashboard/quarter-donut.png`,
  },
  BUDGET: {
    UNIT_SHIFT: `${COMMON_PATH}/unit-shift.png`,
  },
  MODELHOUSE: {
    WATERTANK: `${COMMON_PATH}/watertank.png`,
  },
  LOGO: {
    GREEN: `${COMMON_PATH}/logo.png`,
  },
  LOGIN: {
    BG: `${COMMON_PATH}/login-bg.png`,
  },
});
