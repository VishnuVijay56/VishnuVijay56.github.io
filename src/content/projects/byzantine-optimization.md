---
title: Byzantine-Resilient Distributed Optimization
summary: Distributed optimization methods designed to maintain useful behavior when network participants provide faulty or adversarial information.
order: 2
tags: [Distributed Optimization, Resilience, Networked Systems]
relatedPublications: [vijay-2025-dw-admm, vijay-2025-ms-thesis]
---

## Overview

Dynamically Weighted ADMM (DW-ADMM) adapts the weights on communication edges to make distributed consensus optimization resilient to Byzantine faults or attacks.

## Problem

Conventional distributed ADMM relies on accurate local updates. A faulty or adversarial node can send inconsistent information to its neighbors and cause the network's solution to diverge.

## Approach

DW-ADMM changes edge weights dynamically, reducing the influence of unreliable information without requiring a central coordinator.

## Results / Demonstration

The published analysis shows nearly identical behavior to conventional ADMM in the error-free case and a bounded solution relative to the global minimizer under the paper's Byzantine threat model. Numerical simulations illustrate the method's behavior.
